# Database Normalization – Compact Notes

## Why Normalize?

- Removes **redundancy** and improves consistency.
- Prevents **anomalies**:

  - **Insertion**: Can’t add new fact without unrelated data.
  - **Update**: Must update in multiple places → inconsistency.
  - **Deletion**: Deleting one record removes valuable info.

---

## Normal Forms

### **1NF – First Normal Form**

- **Rule**: No repeating groups; attributes must be **atomic**.
- `Student(ID, Name, Subjects={Math, Science})`
- `Student(ID, Name, Subject)`

---

### **2NF – Second Normal Form**

- **Rule**: In 1NF + no **partial dependency** (non-key depending on part of composite key).
- `Order(OrderID, ProductID, ProductName, Qty)`
- Split into:

- Order(OrderID, ProductID, Qty)
- Product(ProductID, ProductName)

---

### **3NF – Third Normal Form**

- **Rule**: In 2NF + no **transitive dependency** (non-key → non-key).
- `Employee(EmpID, EmpName, DeptID, DeptName)`
- Split into:

- Employee(EmpID, EmpName, DeptID)
- Department(DeptID, DeptName)

---

### **BCNF – Boyce-Codd Normal Form**

- **Rule**: Every determinant must be a **candidate key** (stronger 3NF).
- `Course(CourseID, Instructor)` – one course has many instructors, but instructor uniquely determines course.
- Split into:

- Course(CourseID, InstructorID)
- Instructor(InstructorID, InstructorName)

---

### **4NF – Fourth Normal Form**

- **Rule**: In BCNF + no **multi-valued dependency**.
- `Student(ID, Skill, Language)` → one student has many skills & languages → duplicates.
- Split into:

- StudentSkill(ID, Skill)
- StudentLanguage(ID, Language)

---

### **5NF – Fifth Normal Form**

- **Rule**: In 4NF + no **join dependency** (lossless decomposition).
- `Supplier(SupplierID, ProductID, CustomerID)` → redundancy if each supplier supplies many products to many customers.
- Split into 3:

- SupplierProduct(SupplierID, ProductID)
- SupplierCustomer(SupplierID, CustomerID)
- ProductCustomer(ProductID, CustomerID)

---

## 🔹 Denormalization

- **What**: Reverse process (add redundancy).
- **Why**: Improve **query performance** in read-heavy systems.
- **Trade-off**: Faster reads, but risks anomalies.

---

## 🔹 Example Exercise

### Unnormalized:

```
Order(OrderID, CustomerName, CustomerAddress, ProductID, ProductName, Qty, Price)
```

### Step 1: 1NF

- Remove repeating groups.

```
Order(OrderID, CustomerName, CustomerAddress, ProductID, ProductName, Qty, Price)
```

(each product is separate row now)

### Step 2: 2NF

- Remove partial dependency.

```
Order(OrderID, CustomerID, OrderDate)
Customer(CustomerID, CustomerName, CustomerAddress)
Product(ProductID, ProductName, Price)
OrderDetail(OrderID, ProductID, Qty)
```

### Step 3: 3NF

- Remove transitive dependency.

```
Customer(CustomerID, CustomerName, AddressID)
Address(AddressID, Street, City, State)
```

### Final (Normalized DB)

- Order(OrderID, CustomerID, OrderDate)
- Customer(CustomerID, CustomerName, AddressID)
- Address(AddressID, Street, City, State)
- Product(ProductID, ProductName, Price)
- OrderDetail(OrderID, ProductID, Qty)

---

