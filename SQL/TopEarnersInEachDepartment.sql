Select Department, Employee, Salary from (Select 
    E.name as Employee, 
    E.salary as Salary, 
    D.name as Department,
    dense_rank() over (partition by departmentId order by salary desc) as dep_rank
from Employee as E
inner join Department as D on E.departmentId = D.id) as ranks
where dep_rank <= 3
