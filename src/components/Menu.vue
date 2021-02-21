<template>
<div id="navbar">
    <el-container>
        <el-header style="">
            <el-row type="flex" class="row-container">
                <el-col :span="6">
                    <el-link style="float: left;">
                        <el-button type="text" style="">
                            <h1 style="margin-block: auto; color: black;">{{ title }}</h1>
                        </el-button>
                    </el-link>
                </el-col>
                <el-col :span="6" :offset="12">
                    <el-dropdown @command="handleCommand" style="display:flex;">
                        <div style="margin-left: auto;">
                            <span style="margin-right: 2.5px">{{ language }}</span>
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                        <el-dropdown-menu slot="dropdown" style="text-align:center;">
                            <el-dropdown-item command="en">English</el-dropdown-item>
                            <el-dropdown-item command="zh-hant">繁體中文</el-dropdown-item>
							<el-dropdown-item command="zh-hans">简体中文</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-header>
    </el-container>

</div>
</template>

<script>
export default {
    name: 'Menu',
    data: () => ({
        title: "Tong-uán Lab",
        language: "Language",
    }),
    methods: {
        handleCommand(command) {
            if (command == "zh-hant") {
                this.setZht();
			} else if (command == "zh-hans") {
                this.setZhs();
            } else if (command == "en") {
                this.setEn();
            }
        },
        setEn() {
            this.title = "Tong-uán Lab";
            this.language = "Language";
			this.$parent.changeLanguage("en");
        },
        setZht() {
            this.title = "東苑實驗室";
            this.language = "語言";
			this.$parent.changeLanguage("zh-hant");
        },
		setZhs() {
            this.title = "东苑实验室";
            this.language = "语言";
			this.$parent.changeLanguage("zh-hans");
        }
    }
}
</script>

<style scoped>
#navbar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}

.el-header {
    background-color: #f8f8f8;
    line-height: 60px;
}

.el-link.el-link--default:after,
.el-link.el-link--primary.is-underline:hover:after,
.el-link.el-link--primary:after {
    border-color: #46cba4;
}

.row-container {
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .row-container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .row-container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .row-container {
        max-width: 960px;
    }
}

/*@media (min-width: 1200px) {
.row-container {
    max-width: 1140px;
}
}*/
</style>
