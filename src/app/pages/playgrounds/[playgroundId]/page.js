export default function Contact({ params }) {
  return (
  <div className="p-4 flex justify-center items-center ">
    <div className="border-primary p-8 rounded-3xl shadow border-2">
      this is {params.playgroundId} details
    </div>
  </div>
  )
}
