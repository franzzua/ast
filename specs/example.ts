export namespace Example {
    export namespace Hello {
        export function sayHello(to: string) {
            console.log('Hello ' + to);
        }
    }

    export namespace World {
        export const world = 'World';
    }

    export namespace Entry {
        const {sayHello} = Hello;
        const {world} = World;

        sayHello(world);
    }
}
