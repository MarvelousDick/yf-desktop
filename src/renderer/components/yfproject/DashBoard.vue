<template>
    <div>
        <v-navigation-drawer
                fixed
                :clipped="$vuetify.breakpoint.lgAndUp"
                app
                v-model="drawer"
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-layout
                            row
                            v-if="item.heading"
                            align-center
                            :key="item.heading"
                    >
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                        </v-flex>
                    </v-layout>
                    <v-list-group
                            v-else-if="item.children"
                            v-model="item.model"
                            :key="item.text"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon=""
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile
                                v-for="(child, i) in item.children"
                                :key="i"
                                @click=""
                        >
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ child.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-tile v-else @click="jumpRoute(item.componentName)" :key="item.text">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                color="blue darken-3"
                dark
                app
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                fixed
        >
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">晶棒生产管理系统</span>
            </v-toolbar-title>
            <v-text-field
                    flat
                    solo-inverted
                    prepend-icon="search"
                    label="Search"
                    class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-btn icon large>
                <v-avatar size="32px" tile>
                    <img
                            src="https://vuetifyjs.com/static/doc-images/logo.svg"
                            alt="Vuetify"
                    >
                </v-avatar>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <!--<v-layout justify-center align-center style="text-align: center; padding-top: 13%">-->
                <v-layout>
                    <!--Board area-->
                    <router-view name="mainBoard"></router-view>
                    <!--<v-tooltip right>-->
                    <!--<v-btn-->
                    <!--icon-->
                    <!--large-->
                    <!--:href="source"-->
                    <!--target="_blank"-->
                    <!--slot="activator"-->
                    <!--&gt;-->
                    <!--<v-icon large>code</v-icon>-->
                    <!--</v-btn>-->
                    <!--<span>Source</span>-->
                    <!--</v-tooltip>-->
                    <!--<v-tooltip right>-->
                    <!--<v-btn icon large href="https://codepen.io/johnjleider/pen/EQOYVV" target="_blank"-->
                    <!--slot="activator">-->
                    <!--<v-icon large>mdi-codepen</v-icon>-->
                    <!--</v-btn>-->
                    <!--<span>Codepen</span>-->
                    <!--</v-tooltip>-->
                </v-layout>
            </v-container>
        </v-content>
        <!--<conditionsearch></conditionsearch>-->
    </div>
</template>

<script>
    import conditionsearch from '@/components/yfproject/yfcomponent/ConditionSearch.vue'

    export default {
        data: () => ({
            dialog: false,
            drawer: null,
            items: [
                {heading: '控制台'},
                {icon: 'notes', text: '报表搜索', componentName: 'QueryTable'},
                {icon: 'cloud_upload', text: '上传Excel报表', componentName: 'UploadPage'},
                {icon: 'cloud_upload', text: '表格导出', componentName: 'DownloadTable'}
                // {icon: 'content_copy', text: 'Duplicates'},
                // {
                //     icon: 'keyboard_arrow_up',
                //     'icon-alt': 'keyboard_arrow_down',
                //     text: 'Labels',
                //     model: true,
                //     children: [
                //         {icon: 'add', text: 'Create label'}
                //     ]
                // },
                // {
                //     icon: 'keyboard_arrow_up',
                //     'icon-alt': 'keyboard_arrow_down',
                //     text: 'More',
                //     model: false,
                //     children: [
                //         {text: 'Import'},
                //         {text: 'Export'},
                //         {text: 'Print'},
                //         {text: 'Undo changes'},
                //         {text: 'Other contacts'}
                //     ]
                // },
                // {icon: 'settings', text: 'Settings'},
                // {icon: 'chat_bubble', text: 'Send feedback'},
                // {icon: 'help', text: 'Help'},
                // {icon: 'phonelink', text: 'App downloads'},
                // {icon: 'keyboard', text: 'Go to the old version'}
            ]
        }),

        components: {
            'conditionsearch': conditionsearch
        },

        props: {
            source: String
        },
        methods: {
            jumpRoute(componentName) {
                // console.log(componentName)
                this.$router.push({name: componentName})

            }
        }
    }
</script>