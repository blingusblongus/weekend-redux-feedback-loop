function AdminItem({row}) {
    return (
        <tr key={row.id}>
            <td>{row.feeling}</td>
            <td>{row.understanding}</td>
            <td>{row.support}</td>
            <td>{row.comments}</td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default AdminItem;