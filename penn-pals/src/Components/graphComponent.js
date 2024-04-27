import React, { useState, useEffect } from 'react';

const GraphComponent = ({ users }) => {
    const [components, setComponents] = useState([]);

    // Function to perform DFS and find connected components
    const dfs = (node, visited, adjList, component) => {
        visited[node] = true;
        component.push(node);

        adjList[node].forEach(friend => {
            if (!visited[friend]) {
                dfs(friend, visited, adjList, component);
            }
        });
    };

    // Function to find all connected components
    const findComponents = () => {
        const adjList = {};
        const visited = {};
        users.forEach(user => {
            adjList[user['User ID']] = user.Friends;
            visited[user['User ID']] = false;
        });

        const allComponents = [];
        for (let user of users) {
            const userId = user['User ID'];
            if (!visited[userId]) {
                const component = [];
                dfs(userId, visited, adjList, component);
                allComponents.push(component);
            }
        }
        return allComponents;
    };

    useEffect(() => {
        const allComponents = findComponents();
        setComponents(allComponents);
    }, [users]);

    return (
        <div>
            <h2>Connected Components of Friends</h2>
            {components.map((comp, index) => (
                <div key={index}>
                    <h3>Component {index + 1}</h3>
                    <p>Members: {comp.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default GraphComponent;
