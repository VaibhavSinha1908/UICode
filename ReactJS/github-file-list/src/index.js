import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Time from './time';

const FileList = ({ files }) =>
    <table className="file-list">
        <tbody>
            {
                files.map(file => (
                    <FileListItem key={file.id} file={file} />
                ))}
        </tbody>
    </table>

const FileListItem = ({ file }) =>
    <tr className="file-list-item" >
        <FileName file={file}></FileName>
        <CommitMessage commit={file.latestCommit}></CommitMessage>
        <td className="age">
            <Time time={file.update_at}></Time>
        </td>                    

    </tr>

const CommitMessage = ({ commit }) =>
    <td className="commit-message">
        {commit.message}
    </td>

const FileName = ({ file }) => {
    return (
        <React.Fragment>
            <FileIcon file={file}></FileIcon>
            <td className="file-name">
                {file.name}
            </td>
        </React.Fragment>
    )
}


function FileIcon({ file }) {
    let icon = 'fa-file';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }

    return (
        <td className="file-icon">
            <i className={`fa ${icon}`} />
        </td>
    );
}


const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));