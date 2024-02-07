import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='zh'>
                <meta charSet="utf-8" />
                <link rel="icon" href="https://ys.mihoyo.com/main/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="原神 | Ar-Sr-Na react" />
                <meta name="baidu-site-verification" content="codeva-8zSmxFoXSc" />
                <title>react - 原神</title>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument