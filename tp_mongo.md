# MongoDB

This Practical Work aims at showing how you can optimize your data in mongoDB to make it more poverfull.

For this practical work base yourself on any docker image of mongoDB. Scripts will be writen with node.js.

# Question 1 : Insert Data

We aims at representing employees working in company.

 - An employee have an ID, a name and a company (ID)
 - A company have an ID, and a name

(ID will be generated with monotic counters).

Write a programm in node to create : 

 - 1k companies
 - 10k employees. Select the company an employee is working on based randomly.

Keep track of the time used to insert data.

# Question 2 : Speed estimation.

Write queries for the following questions : 

 - Return the top 10 companies with the more employees.
 - For each one of them, display there employee name
 - Return the company IDs from 1000 to 2000 are working on.

Keep track of the time for each task.

# Question 3

Change the name of a company. Is it easy ?

# Question 4 & 5 : denormalization

Create a new Database. You will do the same question than question 1 & 2 but with the following data-model :

 - An employee have an ID, a name, a company, a company name
 - A company have an ID, a name, a list of employee (both ID and name)

Keep track of the insert time. Keep track of the read time.

# Question 6

Now, using data model of question 4 & 5 write the code for changing the name of a company. Is it easy ?

# Conclusion : 

When should you use denormalisation ? What can you use as a "primary key" ?

