export default function Error() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            flexDirection: 'column'
        }} direction='vertical'>
            <img src="/images/error.png" alt="错误" style={{ width: 100, margin: 10 }}></img>
            <h1>前面的区域，以后再来探索吧？</h1>
            {/* <div className='lead'>页面错误，请确认访问地址是否正确；禁止访问。</div> */}
            <div className='lead'>Powered by <a href='https://www.arsrna.cn' target='_blank'>Ar-Sr-Na</a></div>
        </div>
    )
}