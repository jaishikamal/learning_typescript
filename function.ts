function display(value: string): void;
function display(value: number): void;

function display(value: string | number): void {
    console.log(value);
}

display("Hello");
display(100);

