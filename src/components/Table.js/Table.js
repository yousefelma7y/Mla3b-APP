"use client";

import React, { useState, useRef, useEffect } from "react";
// import events from "../Table.js/event";
import Modal from "./Modal";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { nanoid } from "nanoid";
import { Row, Col, FormGroup, Label, Input, Container } from "reactstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "./Table.css";

const BookingTable = (props) => {
  const playGroundData = props.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const calendarRef = useRef(null);

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [state, setState] = useState({});

  const handleCloseModal = () => {
    handleClose();
    setModal(false);
  };

  function handleDateSelect(selectInfo) {
    if (
      selectInfo.view.type === "timeGridWeek" ||
      selectInfo.view.type === "timeGridDay"
    ) {
      selectInfo.view.calendar.unselect();
      setState({ selectInfo, state: "create" });
      setStart(selectInfo.start);
      setEnd(selectInfo.end);
      setModal(true);
    }
  }

  function handleEventClick(clickInfo) {
    setState({ clickInfo, state: "update" });
    setTitle(clickInfo.event.title);
    setStart(clickInfo.event.start);
    setEnd(clickInfo.event.end);
    setModal(true);
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  function handleEventDrop(checkInfo) {
    setState({ checkInfo, state: "drop" });
    setConfirmModal(true);
  }

  function handleEventResize(checkInfo) {
    setState({ checkInfo, state: "resize" });
    setConfirmModal(true);
  }

  function handleEdit() {
    state.clickInfo.event.setStart(start);
    state.clickInfo.event.setEnd(end);
    state.clickInfo.event.setProp("title", title);
    handleClose();
  }

  function handleSubmit() {
    const newEvent = {
      id: nanoid(),
      title,
      start: state.selectInfo?.startStr || start.toISOString(),
      end: state.selectInfo?.endStr || end.toISOString(),
      allDay: state.selectInfo?.allDay || false,
    };
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(newEvent);
    handleClose();
  }

  function handleDelete() {
    state.clickInfo.event.remove();
    handleClose();
  }

  function handleClose() {
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    setState({});
    setModal(false);
  }

  return (
    <div className="md:w-3/4 w-full pb-5 p-0 m-0">
      <Container className="w-full">
        <Row>
          <Col md={12} className="p-0 m-0">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,today,next",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="timeGridWeek"
              editable={false}
              selectable={false}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              longPressDelay={1}
              slotDuration={"01:00:00"}
              initialEvents={(playGroundData && playGroundData?.table) || []}
              select={handleDateSelect}
              eventClick={handleEventClick}
              eventsSet={handleEvents}
              eventDrop={handleEventDrop}
              eventResize={handleEventResize}
            />
          </Col>
        </Row>
      </Container>

      <Modal
        title={state.state === "update" ? "Update Event" : "Add Event"}
        toggle={handleCloseModal}
        onCancel={handleCloseModal}
        onSubmit={state.clickInfo ? handleEdit : handleSubmit}
        submitText={state.clickInfo ? "Update" : "Save"}
        onDelete={state.clickInfo && handleDelete}
        deleteText="Delete"
      >
        <FormGroup>
          <Label for="eventTitle">Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventTime">From - End</Label>
          <DateRangePicker
            initialSettings={{
              locale: {
                format: "M/DD hh:mm A",
              },
              startDate: start,
              endDate: end,
              timePicker: true,
            }}
            onApply={(event, picker) => {
              setStart(new Date(picker.startDate));
              setEnd(new Date(picker.endDate));
            }}
          >
            <input className="form-control" type="text" disabled />
          </DateRangePicker>
        </FormGroup>
      </Modal>

      <Modal
        title={state.state === "resize" ? "Resize Event" : "Drop Event"}
        isOpen={confirmModal}
        toggle={() => {
          state.checkInfo.revert();
          setConfirmModal(false);
        }}
        onCancel={() => {
          state.checkInfo.revert();
          setConfirmModal(false);
        }}
        cancelText="Cancel"
        onSubmit={() => setConfirmModal(false)}
        submitText={"OK"}
      >
        Do you want to {state.state} this event?
      </Modal>
    </div>
  );
};

export default BookingTable;
