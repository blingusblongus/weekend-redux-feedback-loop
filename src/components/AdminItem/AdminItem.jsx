import axios from "axios";

function AdminItem({row, getFeedback}) {
    const handleClick = () => {
        axios.delete(`/admin/${row.id}`)
            .then(response => {
                console.log('DELETE success');
                getFeedback();
            }).catch(err => {
                console.log('DELETE err');
            });
    }

    return (
        <tr>
            <td>{row.feeling}</td>
            <td>{row.understanding}</td>
            <td>{row.support}</td>
            <td>{row.comments}</td>
            <td><button onClick={handleClick}>Delete</button></td>
        </tr>
    )
}

export default AdminItem;