import { useContextGlobal } from "../../../context/GlobalContext";

function Verify() {

    const {theme} = useContextGlobal();

    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.75 10.4167C18.75 9.1 18.0208 7.95833 16.96 7.41667C17.0883 7.05417 17.1583 6.6625 17.1583 6.25C17.1583 4.40833 15.7333 2.91833 13.9766 2.91833C13.585 2.91833 13.21 2.98833 12.8633 3.12667C12.3483 2.0125 11.2583 1.25 9.99998 1.25C8.74165 1.25 7.65331 2.01417 7.13581 3.125C6.78998 2.9875 6.41415 2.91667 6.02248 2.91667C4.26415 2.91667 2.84081 4.40833 2.84081 6.25C2.84081 6.66167 2.90998 7.05333 3.03831 7.41667C1.97831 7.95833 1.24915 9.09833 1.24915 10.4167C1.24915 11.6625 1.90081 12.7483 2.86748 13.3217C2.85081 13.4633 2.84081 13.605 2.84081 13.75C2.84081 15.5917 4.26415 17.0833 6.02248 17.0833C6.41415 17.0833 6.78915 17.0117 7.13498 16.875C7.65165 17.9867 8.73998 18.75 9.99915 18.75C11.2591 18.75 12.3475 17.9867 12.8633 16.875C13.2091 17.0108 13.5841 17.0817 13.9766 17.0817C15.735 17.0817 17.1583 15.59 17.1583 13.7483C17.1583 13.6033 17.1483 13.4617 17.1308 13.3208C18.0958 12.7483 18.75 11.6625 18.75 10.4175V10.4167ZM13.2366 7.63833L9.62498 13.055C9.50415 13.2358 9.30665 13.3333 9.10415 13.3333C8.98498 13.3333 8.86415 13.3 8.75748 13.2283L8.66165 13.15L6.64915 11.1375C6.40498 10.8933 6.40498 10.4975 6.64915 10.2542C6.89331 10.0108 7.28915 10.0092 7.53248 10.2542L9.00748 11.7267L12.195 6.94333C12.3866 6.65583 12.775 6.58 13.0616 6.77083C13.35 6.9625 13.4283 7.35083 13.2366 7.6375V7.63833Z"
                fill={theme === 'dark' ? '#D9D9D9' : '#1D9BF0'}
            />
        </svg>
    );
}

export default Verify;