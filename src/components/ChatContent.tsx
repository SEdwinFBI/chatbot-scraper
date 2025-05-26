import Message from "./Message"

const ChatContent = () => {
  return (
    <section className="bg-blue-950 py-20 flex-1 flex flex-col">
      {
        Array(1).fill(undefined).map(_=>{
            return (
                  <div className="m-2 self-start">
                    <Message/>
                  </div>
            )
        })
      }
            {
        Array(2).fill(undefined).map(_=>{
            return (
                  <div className="m-2 self-end">
                    <Message/>
                  </div>
            )
        })
      }
                  {
        Array(1).fill(undefined).map(_=>{
            return (
                  <div className="m-2 self-start">
                    <Message/>
                  </div>
            )
        })
      }
    </section>
  )
}

export default ChatContent
