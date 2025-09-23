import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class StreamBasics {

    public static void main(String[] args) {
        // ---------- 1) Creating streams ----------
        List<String> fruits = Arrays.asList("Apple", "Banana", "Mango", "Orange", "Apple", "Grape");
        System.out.println("Original fruits: " + fruits);

        // from Collection
        Stream<String> streamFromList = fruits.stream();

        // from array
        Stream<String> streamFromArray = Arrays.stream(new String[]{"Kiwi", "Pineapple"});

        // Stream.of
        Stream<String> streamOf = Stream.of("Papaya", "Lychee");

        // IntStream (primitive stream)
        IntStream numbers = IntStream.rangeClosed(1, 5); // 1,2,3,4,5

        // ---------- 2) Common intermediate operations ----------
        // filter, map, distinct, sorted, limit, skip, peek, flatMap
        List<String> processed = fruits.stream()
            .filter(s -> s.length() > 5)       // keep only strings with length > 5
            .map(String::toUpperCase)          // convert to uppercase
            .distinct()                        // remove duplicates
            .sorted()                          // sort lexicographically
            .collect(Collectors.toList());     // terminal op: collect to List

        System.out.println("Processed (len>5, uppercase, distinct, sorted): " + processed);

        // peek is useful for debugging the pipeline (shows lazy behavior)
        List<String> peekResult = fruits.stream()
            .peek(s -> System.out.println("peek(before filter): " + s))
            .filter(s -> s.startsWith("A") || s.startsWith("B"))
            .peek(s -> System.out.println("peek(after filter): " + s))
            .map(String::toLowerCase)
            .collect(Collectors.toList());
        System.out.println("Peek result: " + peekResult);

        // flatMap example: list of lists -> flattened
        List<List<Integer>> listOfLists = Arrays.asList(
            Arrays.asList(1, 2, 3),
            Arrays.asList(4, 5),
            Arrays.asList(6)
        );
        List<Integer> flattened = listOfLists.stream()
            .flatMap(List::stream)     // convert each inner list to a stream and flatten
            .collect(Collectors.toList());
        System.out.println("Flattened numbers: " + flattened);

        // ---------- 3) Common terminal operations ----------
        // forEach
        System.out.print("First 3 fruits (forEach): ");
        fruits.stream().limit(3).forEach(f -> System.out.print(f + " "));
        System.out.println();

        // count
        long countA = fruits.stream().filter(s -> s.startsWith("A")).count();
        System.out.println("Count starting with 'A': " + countA);

        // findFirst / findAny
        Optional<String> firstLong = fruits.stream().filter(s -> s.length() > 5).findFirst();
        System.out.println("First long fruit (len>5): " + firstLong.orElse("none"));

        // reduce (combine elements)
        Optional<String> reduced = fruits.stream().reduce((a, b) -> a + "|" + b);
        System.out.println("Reduced (joined by |): " + reduced.orElse(""));

        // collect with joining
        String joined = fruits.stream().collect(Collectors.joining(", "));
        System.out.println("Joined with collector: " + joined);

        // collect to Set (no duplicates)
        Set<String> fruitSet = fruits.stream().collect(Collectors.toSet());
        System.out.println("Collected Set (no duplicates): " + fruitSet);

        // ---------- 4) Primitive stream operations ----------
        int sum = IntStream.rangeClosed(1, 5).sum();          // 1+2+3+4+5 = 15
        double avg = IntStream.rangeClosed(1, 5).average().orElse(0);
        int max = IntStream.of(3, 7, 2, 9).max().orElse(-1);
        System.out.println("Sum 1..5 = " + sum + ", avg = " + avg + ", max = " + max);

        // mapToInt example: length statistics
        IntSummaryStatistics stats = fruits.stream()
            .mapToInt(String::length)
            .summaryStatistics();
        System.out.println("String length stats -> count: " + stats.getCount() +
                           ", min: " + stats.getMin() +
                           ", max: " + stats.getMax() +
                           ", average: " + stats.getAverage());

        // ---------- 5) Lazy evaluation and short-circuiting ----------
        // anyMatch short-circuits: stops early when predicate satisfied
        boolean anyStartsWithG = fruits.stream()
            .peek(s -> System.out.println("checking: " + s))
            .anyMatch(s -> s.startsWith("G"));
        System.out.println("Any fruit starts with G? " + anyStartsWithG);

        // ---------- 6) Parallel stream example ----------
        System.out.print("Parallel forEach (order not guaranteed): ");
        fruits.parallelStream().forEach(s -> System.out.print(s + " "));
        System.out.println();

        // for deterministic order in parallel use forEachOrdered
        System.out.print("Parallel forEachOrdered (preserve order): ");
        fruits.parallelStream().forEachOrdered(s -> System.out.print(s + " "));
        System.out.println();

        // ---------- 7) Example: pipeline combining many things ----------
        List<String> pipelineExample = fruits.stream()
            .filter(s -> !s.equalsIgnoreCase("Mango"))
            .map(s -> s + "-" + s.length())
            .sorted()
            .limit(5)
            .collect(Collectors.toList());
        System.out.println("Pipeline example: " + pipelineExample);
    }
}
