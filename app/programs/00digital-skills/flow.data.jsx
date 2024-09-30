"use client";

import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Initial nodes and edges data
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Data' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Process Data' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Analyze Data' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Output Results' },
    position: { x: 250, y: 200 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

export default function DataFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[600px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
