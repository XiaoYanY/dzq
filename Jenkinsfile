library('delivery')
library('kkb-front-flow-plugin')

delivery {
    apply plugin: "flow"
    apply plugin: "kkb_k8s_front_deploy"

    config {
        category = "plat"
        name = "fig-ssr"
        release_repo="fep/fig-ssr"
        version = "1.0.0-${env.COMMIT_ID}"
    }
}
