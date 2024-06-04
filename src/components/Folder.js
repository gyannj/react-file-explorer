import { useState } from "react";
function Folder({ handleInputNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  // const [showRename, setShowRename] = useState({
  //   visible: false,
  //   isFolder: true,
  // });
  const onFolderAdd = (e, value) => {
    setShowInput({
      visible: true,
      isFolder: value,
    });
  };

  // const onFolderRename = (e, value) => {
  //   setShowRename({
  //     visible: true,
  //     isFolder: true,
  //   });
  //   // e.stopPropagation();
  // };

  const handleAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInputNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  // const handleRename = (e) => {
  //   if (e.keyCode === 13 && e.target.value) {
  //     handleEditNode(explorer.id, e.target.value, true);
  //     setShowRename({ ...showRename, visible: false });
  //   }
  // };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span> 📁 {explorer.name} </span>
          <div>
            <button
              style={{ marginRight: 5, marginBottom: 3, marginTop: 3 }}
              onClick={(e) => onFolderAdd(e, true)}
            >
              ➕ Folder
            </button>
            <button
              style={{ marginRight: 5, marginBottom: 3, marginTop: 3 }}
              onClick={(e) => onFolderAdd(e, false)}
            >
              ➕ File
            </button>
          </div>
          {/* <div className="edit_buttons">
            <button
              style={{ marginRight: 5, marginBottom: 3, marginTop: 3 }}
              onClick={(e) => onFolderRename(e, true)}
            >
              Rename
            </button>
            <button style={{ marginRight: 5, marginBottom: 3, marginTop: 3 }}>
              Delete
            </button>
          </div> */}
        </div>

        <div style={{ display: expand ? "block" : "none", marginLeft: 20 }}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={handleAddFolder}
                autoFocus
                onBlur={() => setShowInput({ ...setShowInput, visible: false })}
              />
            </div>
          )}

          {/* {showRename.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={handleRename}
                autoFocus
                onBlur={() =>
                  setShowRename({ ...setShowRename, visible: false })
                }
              />
            </div>
          )} */}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInputNode={handleInputNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <div className="file">📄 {explorer.name}</div>
      </div>
    );
  }
}
export default Folder;
