import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const About = () => import(/* webpackChunkName: "about" */ "@/views/About.vue");
const boardLayer = () =>
  import(/* webpackChunkName: "boardLayer" */ "@/views/boardLayer.vue");
const BoardList = () =>
  import(
    /* webpackChunkName: "MemberList" */ "@/components/board/BoardList.vue"
  );
const BoardWrite = () =>
  import(
    /* webpackChunkName: "MemberList" */ "@/components/board/BoardWrite.vue"
  );
const BoardInfo = () =>
  import(
    /* webpackChunkName: "MemberList" */ "@/components/board/BoardInfo.vue"
  );
const Login = () =>
  import(/* webpackChunkName: "MemberList" */ "@/views/Login.vue");
const RockPaper = () =>
  import(
    /* webpackChunkName: "MemberList" */ "@/views/ZeroChoStudy/RockPaperScissors.vue"
  );
const LottoGenarator = () =>
  import(
    /* webpackChunkName: "MemberList" */ "@/views/ZeroChoStudy/LottoGenarator.vue"
  );
const TicTecTo = () =>
  import(
    /* webpackChunkName: "MemberList" */ "@/views/ZeroChoStudy/TicTecTo.vue"
  );

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:userId",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About,
  },
  {
    path: "/boardLayer",
    name: "boardLayer",
    component: boardLayer,
    children: [
      {
        path: "/board/boardList",
        name: "boardList",
        component: BoardList,
      },
      {
        path: "/board/boardWrite",
        name: "boardWrite",
        component: BoardWrite,
      },
      {
        path: "/board/boardInfo/:seq",
        name: "boardInfo",
        component: BoardInfo,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/RockPaper",
    name: "RockPaper",
    component: RockPaper,
  },
  {
    path: "/LottoGenarator",
    name: "LottoGenarator",
    component: LottoGenarator,
  },
  {
    path: "/TicTecTo",
    name: "TicTecTo",
    component: TicTecTo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
