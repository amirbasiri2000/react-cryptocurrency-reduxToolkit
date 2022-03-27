import { Spin } from "antd"


const Loading = () =>{

  return(
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20vh',
        marginBottom: '55vh',
      }}
    >
      <Spin tip="Loading..." size="large" />
    </div>
  )
}

export default Loading;