export type Employee = {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export type EmployeeNoId = Omit<Employee, 'id'>;