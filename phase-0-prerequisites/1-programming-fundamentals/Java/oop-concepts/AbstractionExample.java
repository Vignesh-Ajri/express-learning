abstract class Vehicle {
    abstract void drive();  // abstract method
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car is driving...");
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        Vehicle v = new Car(); 
        v.drive();
    }
}
