import { useState } from 'react';
import type { Employee } from './types/ComponentTypes';


export function EmployeeApp() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'johnDoe@mail.com',
            address: '89 Chiaroscuro Rd, Portland, USA',
            phone: '(171) 555-2222'
        }
    ]);

    const [title, setTitle] = useState("Default Title");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    function updateTitle(newTitle?: string) {
        setTitle(newTitle!);
    }

    return (
        <div className='container'>
            <div className='table-wrapper'>
                <Header title={title} onUpdateTitle={updateTitle} onOpenAddModal={() => setIsAddModalOpen(true)} />
                <EmployeeList employees={employees} />
                <AddEmployeeModel isOpen={isAddModalOpen} onCloseAddModal={() => setIsAddModalOpen(false)} />
            </div>
        </div>
    )
}

function Header({ title, onUpdateTitle, onOpenAddModal }: { title: string, onUpdateTitle: (newTitle: string) => void, onOpenAddModal: () => void }) {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>{title}</h2>
                </div>
                <div className="col-sm-6">
                    <button className="btn btn-success" onClick={() => onUpdateTitle("New Title (Updated)")}>Change Title</button>
                    <button className="btn btn-success" onClick={() => onOpenAddModal()}><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></button>
                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>
                </div>
            </div>
        </div>
    )
}

function EmployeeList({ employees }: { employees: Employee[] }) {

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label htmlFor="selectAll"></label>
                        </span>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp => (
                        <EmployeeItem key={emp.id} employee={emp} />
                    ))
                }
            </tbody>
        </table>
    )
}

function EmployeeItem({ employee }: { employee: Employee }) {
    return (
        <tr>
            <td>
                <span className="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                    <label htmlFor="checkbox1"></label>
                </span>
            </td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </tr>
    )
}

function AddEmployeeModel({ isOpen, onCloseAddModal }: { isOpen: boolean, onCloseAddModal: () => void }) {
    if (!isOpen) {
        return null;
    } else {
        return (
            <>
                <div id="addEmployeeModal" className="modal fade show">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Employee</h4>
                                    <button onClick={onCloseAddModal} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='modal-backdrop fade show'></div>
            </>
        )
    }
}