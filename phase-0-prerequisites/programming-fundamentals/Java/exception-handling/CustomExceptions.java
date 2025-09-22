// Step 1: Create a custom exception by extending Exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);  // Pass message to parent Exception class
    }
}

public class CustomExceptions {
    // Step 2: Method that throws custom exception
    public static void checkEligibility(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above to vote.");
        } else {
            System.out.println("Eligible to vote!");
        }
    }

    public static void main(String[] args) {
        try {
            int age = 16; // test with below 18
            checkEligibility(age);

        } catch (InvalidAgeException e) {
            System.out.println("Custom Exception caught: " + e.getMessage());
        }

        try {
            int age = 20; // test with valid age
            checkEligibility(age);

        } catch (InvalidAgeException e) {
            System.out.println("Custom Exception caught: " + e.getMessage());
        }
    }
}
