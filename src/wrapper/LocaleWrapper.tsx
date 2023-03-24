import {IntlProvider} from "react-intl";
import {PropsWithChildren, useEffect, useState} from "react";

const locale = localStorage.getItem('locale') ?? 'ko';

export default function LocaleWrapper({children}: PropsWithChildren) {
    const [result, setResult] = useState(<div>Locale Loading</div>);

    useEffect(() => {
        import(`../lang/${locale}`).then((value) => {
            console.log(JSON.stringify(value.default));
            setResult(<IntlProvider locale={locale} messages={value.default}>{children}</IntlProvider>);
        })
    }, [children])

    return result;
}