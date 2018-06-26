import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '@/components/yfproject/Main.vue'
import DashBoard from '@/components/yfproject/DashBoard.vue'
import StickTable from '@/components/yfproject/yfcomponent/StickTable.vue'
import TableContent from '@/components/yfproject/yfcomponent/TableContent.vue'
import UploadPage from '@/components/yfproject/yfcomponent/UploadPage.vue'
import QueryTable from '@/components/yfproject/yfcomponent/QueryTable.vue'
import TestComponent from '@/components/yfproject/yfcomponent/TestComponent.vue'
import DownloadTable from '@/components/yfproject/yfcomponent/DownloadTable.vue'


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: '',
                    name: 'DashBoard',
                    components: {
                        default: DashBoard
                    },
                    children: [
                        {
                            path: '',
                            name: 'TestComponent',
                            components: {
                                mainBoard: TestComponent
                            }
                        },
                        {
                            path: 'uploadpage',
                            name: 'UploadPage',
                            components: {
                                mainBoard: UploadPage
                            }
                        },
                        {
                            path: 'sticktable',
                            name: 'StickTable',
                            components: {
                                mainBoard: StickTable
                            }
                        },
                        {
                            path: 'querytable',
                            name: 'QueryTable',
                            components: {
                                mainBoard: QueryTable
                            }
                        },
                        {
                            path: 'downloadtable',
                            name: 'DownloadTable',
                            components: {
                                mainBoard: DownloadTable
                            }
                        }

                    ]
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
