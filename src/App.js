import "./styles.css";
import { useState } from "react";
import { explorer } from "./data/explorer";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorer);
  const { inputNode, editNode } = useTraverseTree();

  const handleInputNode = (folderId, folderName, isFolder) => {
    const newTree = inputNode(explorerData, folderId, folderName, isFolder);
    setExplorerData(newTree);
  };

  // const handleEditNode = (folderId, folderName, isFolder) => {
  //   const newTree = editNode(explorerData, folderId, folderName, true);
  //   setExplorerData(newTree);
  // };

  return (
    <div className="App">
      <Folder handleInputNode={handleInputNode} explorer={explorerData} />
    </div>
  );
}
