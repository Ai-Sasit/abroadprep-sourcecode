import GtagHelper from 'gtag-helper';

const gtag = new GtagHelper("G-NYPFNH7CCM", { noInit: true });
export const GA_TRACKING_ID = "G-NYPFNH7CCM"

export const pageview = (url:string) => {
    gtag.config({
        send_page_view: true,
        page_path: url
    });
}

export const event = ({ action, category, label, value }:any) => {
    gtag.event(action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}