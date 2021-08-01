import React from 'react'
import './index.css'

const Table = (props) => {
    const { userList } = props

    return (
        <div>
            <table id="user">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.length !== 0 ? 
                            userList.map((data, idx) => {
                                return(
                                    <tr key={idx+1}>
                                        <td>{idx+1}</td>
                                        <td>{data.title}</td>
                                        <td>{data.author}</td>
                                        <td>{data.published}</td>
                                    </tr>
                                )
                            })
                        : 
                            <tr>
                                <td colSpan="4" className="no-data">No Data</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
