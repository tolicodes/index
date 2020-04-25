/**
 * I started playing around with treebeard but the default
 * instructions were not expanding the tree. It has something
 * to do with the way React handles mutations. So I tried
 * an approach where I make deep copies and reference nodes
 * by ID. It didn't work, stuck on the `active` property not
 * taken off the cursor
 */

import React, { useState, useEffect } from "react";
import { Treebeard } from "react-treebeard";
import { v4 as uuid } from "uuid";
import { cloneDeep } from "lodash";

const forEachNodeInTree = (
  tree,
  mutationFunc,
  { leafs = true, withChildren = true } = {}
) => {
  tree.forEach((node) => {
    if (node.children) {
      if (withChildren) {
        mutationFunc(node);
      }

      forEachNodeInTree(node.children, mutationFunc, {
        leafs,
        withChildren,
      });

      return node;
    }

    if (leafs) {
      mutationFunc(node);
    }

    return node;
  });

  return tree;
};

const findNodeInTree = (tree, matchFunc) => {
  return tree.find((node) => {
    if (matchFunc(node)) {
      return node;
    }
    if (node.children) {
      return findNodeInTree(node.children, matchFunc);
    }
  });
};

const findNodeInTreeById = (tree, id) => {
  return findNodeInTree(tree, (node) => {
    return node.id === id;
  });
};

const prepareData = (tree) => {
  return forEachNodeInTree(tree, (node) => {
    node.toggled = true;
    node.id = uuid();
  });
};

export default ({ files }) => {
  const [data, setData] = useState();
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    setData(prepareData(files));
  }, [files]);

  // allows to toggle
  const onToggle = (node, toggled) => {
    if (cursor) {
      const cursorNode = findNodeInTreeById(data, cursor);
      cursorNode.active = false;
    }

    node.active = true;

    if (node.children) {
      node.toggled = toggled;
    }

    // we need to do a deep clone so that react's data diff algorithms catch it
    setData(cloneDeep(data));

    setCursor(node.id);
  };

  return (
    <div>
      <div>Select the files you'd like to commit </div>
      {data ? <Treebeard data={data} onToggle={onToggle} /> : "Loading"}
    </div>
  );
};
