import React, { useState, useEffect } from 'react';

const GraphComponent = ({ userIDs }) => {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        const loadUsers = () => {
            const data = localStorage.getItem('userData');
            return data ? JSON.parse(data) : [];
        };

        const users = loadUsers();
        const allComponents = findComponents(users, userIDs);
        connectSingleMemberComponents(allComponents);
    }, [userIDs]);

    const dfs = (node, visited, adjList, component) => {
        visited[node] = true;
        component.push(node);

        if (adjList[node] && Array.isArray(adjList[node])) {
            adjList[node].forEach(friend => {
                if (!visited[friend]) {
                    dfs(friend, visited, adjList, component);
                }
            });
        }
    };

    const findComponents = (users, userIDs) => {
        const adjList = {};
        const visited = {};
        
        users.forEach(user => {
            if (userIDs.includes(user['User ID'])) {
                adjList[user['User ID']] = user.Friends ? user.Friends.filter(friend => userIDs.includes(friend)) : [];
                console.log(adjList[user['User ID']])
                visited[user['User ID']] = false;
            }
        });

        const allComponents = [];
        userIDs.forEach(userId => {
            if (userId in visited && !visited[userId]) {
                const component = [];
                dfs(userId, visited, adjList, component);
                allComponents.push(component);
            }
        });
        return allComponents;
    };

    const connectSingleMemberComponents = (components) => {
        const singleMembers = components.filter(comp => comp.length === 1).flat();
        const multiMembers = components.filter(comp => comp.length > 1);
        if (singleMembers.length > 0) { 
            multiMembers.push(singleMembers);
        }
        setComponents(multiMembers);
    };

    return (
        <div>
            <h4>Friend groups</h4>
            {components.map((comp, index) => (
                <div key={index}>
                    <h5>Friend Group {index + 1}</h5>
                    <p>{comp.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default GraphComponent;
