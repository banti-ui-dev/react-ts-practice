export type ProfileProps = {
    name : string;
    role : string;
    experience : number;
    isOnline : boolean;
}

export type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
};

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}
