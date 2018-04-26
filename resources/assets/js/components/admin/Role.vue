<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">My Tasks</div>
                    <div class="panel-body">
                        <div class="input-group">
                            <input type="text" class="form-control"
                                   v-model="task.name"
                                   @keydown.enter="create">
                            <span class="input-group-btn">
                                <button class="btn btn-success" @click="create">Add</button>
                            </span>
                        </div>

                        <div class="tasks-list">
                            <div  v-cloak class="alert alert-danger" v-if="!tasks.length" >
                                You have no tasks!
                            </div>
                            <ul class="list-unstyled">
                                <li v-for="task in tasks" :key="task.id" :class="{done: task.completed}">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" v-model="task.completed"
                                                   @click="done(task)"> {{ task.name }}
                                        </label>
                                        <div class="pull-right">
                                            <a href="#" @click.prevent="remove(task)">x</a>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="panel-footer">
                        <span class="label label-default">You have {{ tasks.length }} tasks</span>
                        <span class="label label-warning">{{ remainingTasks() }} tasks left</span>
                        <span class="label label-success">{{ completedTasks() }} tasks completed</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.fetchData();
        },
        data() {
            return {
                tasks: [],
                task: {
                    name: ''
                }
            }
        },
        methods: {
            remainingTasks(){
                return this.tasks.filter((task) => { return !task.completed }).length
            },
            completedTasks(){
                return this.tasks.filter((task) => { return task.completed }).length
            },
            fetchData() {
                axios.get('/api/k_tasks')
                    .then((res) => {
                        this.tasks = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            create() {
                axios.post('/api/k_tasks', this.task)
                    .then((res) => {
                        this.tasks.unshift(res.data);
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },

            done(task) {
                axios.put(`/api/k_tasks/${task.id}`, {
                    completed: !task.completed
                })
                    .then((res) => {
                        console.log('task updated')
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },

            remove(task) {
                axios.delete(`/api/k_tasks/${task.id}`, {
                    completed: !task.completed
                })
                    .then((res) => {
                        const taskIndex = this.tasks.indexOf(task);
                        this.tasks.splice(taskIndex, 1)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style>
    body, .tasks-list {
        padding-top: 20px;
    }

    .done label {
        text-decoration: line-through;
    }

    [v-cloak] {
        display: none !important;
    }
</style>