function useTraverseTree() {
  function inputNode(tree, folderId, folderName, isFolder) {
    // console.log(tree);
    if (tree.id === folderId) {
      tree.items.unshift({
        name: folderName,
        id: new Date().getTime(),
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((child) => {
      return inputNode(child, folderId, folderName, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  // function editNode(tree, folderId, folderName, isFolder) {
  //   if (tree.id === folderId) {
  //     tree.name = folderName;
  //     return tree;
  //   }

  //   let latestNode = [];
  //   latestNode = tree.items.map((child) => {
  //     return editNode(child, folderId, folderName, isFolder);
  //   });
  // }

  return { inputNode };
}

export default useTraverseTree;
