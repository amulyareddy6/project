
const tasks = ["Task 1", "Task 2"];
const posts = ["Post 1", "Post 2"];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");

    if (taskInput.value) {
        tasks.push(taskInput.value);
        updateTaskList(taskList);
        taskInput.value = "";
    }
}

// Function to update the task list
function updateTaskList(taskList) {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Function to add a social media post
function addPost() {
    const postInput = document.getElementById("post");
    const socialFeed = document.getElementById("social-feed");

    if (postInput.value) {
        posts.push(postInput.value);
        updateSocialFeed(socialFeed);
        postInput.value = "";
    }
}

// Function to update the social media feed
function updateSocialFeed(socialFeed) {
    socialFeed.innerHTML = "";
    posts.forEach(post => {
        const div = document.createElement("div");
        div.textContent = post;
        socialFeed.appendChild(div);
    });
}

// Initial population of task list and social media feed
updateTaskList(document.getElementById("task-list"));
updateSocialFeed(document.getElementById("social-feed"));
