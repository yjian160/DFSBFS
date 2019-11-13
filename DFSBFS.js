var dfs = (node, targetValue) => {
	if (node.value === targetValue) {
		return true;
	}

	for (var i = 0; i < node.children.length; i++) {
		if (dfs(node.children[i], targetValue)) {
			return true;
		}
	}

	return false;
}

var bfs = (node, targetValue) => {

	var queue = [];
	var visited = {};
	queue.push(node);

	while(queue.length > 0) {
		var current = queue.shift();
		console.log(current.value)
		visited[current.value] = current.value;
		if (current.value === targetValue) {
			return true;
		}

		for (var i = 0; i < current.children.length; i++) {
			console.log(current.visited);
			if (visited[current.children[i].value] !== current.children[i].value) {
				queue.push(current.children[i]);
			}
		}
	}

	return false;
}

var e = {value: 'e', children: []};
var c = {value: 'c', children: []};
var d = {value: 'd', children: [c, e]};
var b = {value: 'b', children: [c]};
var a = {value: 'a', children: [b, d]};
var z = {value: 'z', children: [e]};
