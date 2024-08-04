import { useState } from "react";

function App() {

  const [formdata, setformdata] = useState({});
  const handleChange = (ev) => {
    setformdata({ ...formdata, [ev.target.id]: ev.target.value })
    console.log(formdata)
  }
  return (
    <div className="max-w-lg  mx-auto my-5">
      <form>
        <input type="text" onChange={handleChange} placeholder="name" id="name" className="flex flex-col gap-2" />
        <input type="text" onChange={handleChange} placeholder="email" id="email" className="flex flex-col gap-2" />
      </form>
    </div>
  )
}

export default App
