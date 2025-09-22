class Animal {
    void sound() {
        System.out.println("Some sound...");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Woof Woof");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Meow");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        a1.sound();  // Woof
        a2.sound();  // Meow
    }
}
