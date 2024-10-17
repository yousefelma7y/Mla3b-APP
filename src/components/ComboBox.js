"use client";
import { Fragment, useEffect, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ThreeDots, useLoading } from "@agney/react-loading";

export default function CustomComboBox({
  items,
  placeholder = "أختر المحافظة",
  formik,
  fieldName,
  onChange = () => {},
  isCleared = false,
  onClear,
  isLoading = false,
  small = false,
  byId = false,
  textLeft = false,
  objectProperty = null,
  object = null,
  disabled = false,
  dashboardFilter = false,
  rounded = true,
  margin = true,
}) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  const { containerProps, indicatorEl } = useLoading({
    loading: isLoading,
    indicator: <ThreeDots width="50" />,
  });

  useEffect(() => {
    if (isCleared) {
      setSelected(null);
      setQuery("");
      onClear();
    }
  }, [isCleared]);

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    if (formik && formik.values[fieldName] === "") {
      setSelected(null);
    }
  }, [formik]);

  useEffect(() => {
    if (!selected) return;
    if (!formik) {
      return onChange(byId ? selected.id : selected.name);
    }
    if (object) {
      formik.getFieldHelpers(fieldName).setValue([
        ...formik.values[fieldName].map((item) => {
          if (item.id === object.id) {
            return {
              ...object,
              [objectProperty]: byId ? selected.id : selected.name,
            };
          }
          return item;
        }),
      ]);
    } else {
      formik.setFieldValue(fieldName, byId ? selected.id : selected.name);
    }
  }, [selected]);

  useEffect(() => {
    if (!items || items.length === 0) {
      setSelected(null);
    }
  }, [items]);

  return (
    <Combobox value={selected} onChange={setSelected} disabled={disabled}>
      {(api) => (
        <div className="relative h-full w-1/2">
          <ComboboxButton
            dir="rtl"
            className={`relative flex justify-between w-full items-center rounded-2xl bg-white px-2 shadow-md border-none py-4 text-sm text-gray-400`}
          >
            <span className="">
              {api.value ? api.value?.name : placeholder}
            </span>
            <ChevronUpDownIcon
              className={`absolute left-1.5 size-6 text-gray-400 `}
              aria-hidden="true"
            />
          </ComboboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <div className="absolute z-50 w-full">
              <div className="relative rounded-2xl mt-1 border border-gray-400 bg-white p-2">
                <ComboboxInput
                  className="h-10 z-50 mt-1 w-full border-2 border-primary rounded-2xl md:py-2 md:pl-3 md:pr-10 text-sm leading-5 text-right text-gray-800 placeholder-gray-400"
                  placeholder={placeholder}
                  onChange={(event) => setQuery(event.target.value)}
                  onFocus={(e) => e.target.select()}
                />
                <ComboboxOptions
                  modal={false}
                  className="z-50 mt-1 max-h-50 w-full overflow-y-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 sm:text-sm"
                >
                  {isLoading ? (
                    <div className="flex h-28 items-center justify-center">
                      {indicatorEl}
                    </div>
                  ) : filteredItems.length === 0 ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredItems.map((item) => (
                      <ComboboxOption
                        disabled={item.disabled}
                        key={item.id}
                        className={({ active }) =>
                          `relative cursor-pointer select-none p-2 text-gray-900 ${
                            active && "bg-green-50"
                          }`
                        }
                        value={item}
                      >
                        {({ selected, disabled }) => (
                          <>
                            <span
                              className={`${
                                disabled && "cursor-not-allowed text-gray-400"
                              } block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item?.element || item?.name}
                            </span>
                            {selected && (
                              <span
                                className={`absolute inset-y-0 right-0.5 flex items-center pl-3 text-green-500`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </ComboboxOption>
                    ))
                  )}
                </ComboboxOptions>
              </div>
            </div>
          </Transition>
        </div>
      )}
    </Combobox>
  );
}
