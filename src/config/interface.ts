export interface Route {
    label: string;
    link: string;
    icon: string;
}

export interface Routes {
    [name: string]: Route;
}