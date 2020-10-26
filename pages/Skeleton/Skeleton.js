// import { ref } from '@vue/composition-api';
import Skeleton from '@/components/skeleton';
export default {
  name: "skeleton",
  components: {
    Skeleton,
  },
  props: [],
  data() {
    return {
      userData: {},
      firstLoad:true
    };
  },
  computed: {},
  mounted() {
    
    this.setup();
  },
  methods: {
    async setup() {
      // alert("salam")
      const loadUserData = async () => {
        return new Promise((resolve) => {
          // alert("khob")
          setTimeout(() => {
            resolve({
              name: "Matt Maribojoc",
              pic:
                "https://cdn-images-1.medium.com/fit/c/100/100/2*EcZb9cndrhTF7_d74dv2Fg.png",
              bio:
                "I run a VueJS community over at https://learnvue.co, develop web sites, and post whatever I find cool on the Internet.",
            });
          }, 4000);
        });
      };
      this.userData = await loadUserData();
      this.firstLoad=false

      // alert(this.userData);
    },
  },
};
