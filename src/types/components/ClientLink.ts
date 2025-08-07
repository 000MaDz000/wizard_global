export enum NativeLinkEnumeration {
    cars = "cars",
    it = "information technology",
    ecommerce = "e-commerce",
    home = "home",
    about = "about",
    services = "services",
    clients = "clients",
    artical = "artical",
    login = "login",
    register = "register"
}

export type ClientLinkProps = {
    href?: NativeLinkEnumeration;
    custom_href?: string;
    text?: string;
}

export enum Links {
    CARS = "/cars",
    IT = "/it",
    ecommrece = "/ecommerce",
    HOME = "/",
    ABOUT = "/#about",
    SERVICES = "/#services",
    CLIENTS = "/#clients",
    ARTICAL = "/#artical",
    LOGIN = "/login",
    REGISTER = "/register",

}