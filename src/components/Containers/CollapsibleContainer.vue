<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-collapsible-container
                    :modelValue="modelValue"
                    :title="title"
                >
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Todo mundo
                        vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
                        Atirei o pau no gatis, per gatis num morreus. Pra lá , depois
                        divoltis porris, paradis. Leite de capivaris, leite de mula
                        manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad
                        litora torquent. Per aumento de cachacis, eu reclamis. Nec
                        orci ornare consequat. Praesent lacinia ultrices consectetur.
                        Sed non ipsum felis. Cevadis im ampola pa arma uma pindureta.
                    </p>
                </zds-collapsible-container>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>

<script>
export default {
    name: 'CollapsibleContainer',
    props: {
        /**
		 * Represents the state of the component. When 'false' the content is not shown
		 * and when 'true' the contents of the container are displayed.
		 */
		modelValue: {
			type: Boolean,
			default: false,
			required: true,
		},
		/**
		 * Title of the item to be expanded
		 */
		title: {
			type: String,
			default: 'View more',
		},
    },
    data() {
        return {
        }
    },
    mounted () {
    },
    methods: {},
}
</script>

<style>

</style>
  