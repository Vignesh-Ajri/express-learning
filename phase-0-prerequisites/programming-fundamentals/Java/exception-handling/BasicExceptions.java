public class BasicExceptions {
    public static void main(String[] args) {
        try {
            // Example 1: Arithmetic Exception (divide by zero)
            int a = 10;
            int b = 0;
            int result = a / b;  // This will throw ArithmeticException
            System.out.println("Result: " + result);

        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException caught: " + e.getMessage());
        }

        try {
            // Example 2: ArrayIndexOutOfBoundsException
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]);  // Invalid index

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException caught: " + e.getMessage());
        }

        try {
            // Example 3: NullPointerException
            String str = null;
            System.out.println(str.length());  // Null value, will throw exception

        } catch (NullPointerException e) {
            System.out.println("NullPointerException caught: " + e.getMessage());
        }

        finally {
            // This block always runs, no matter what
            System.out.println("Finally block executed.");
        }

        System.out.println("Program continues after handling exceptions...");
    }
}
