<template>
  <div>
    <h1>Create Menu</h1>
    <form @submit.prevent="saveMenu">
      <div>
        <label>Name</label>
        <input v-model="menu.name" required />
      </div>
      <div>
        <label>Price</label>
        <input v-model="menu.price" />
      </div>
      <div>
        <label>Description</label>
        <textarea v-model="menu.description"></textarea>
      </div>
      <div>
        <label>Status</label>
        <input v-model="menu.status" />
      </div>
      <button type="submit">บันทึก</button>
      <button type="button" @click="$router.push('/menus')">ยกเลิก</button>
    </form>
  </div>
</template>

<script>
import Api from '../../services/Api'

export default {
  data () {
    return {
      menu: {
        name: '',
        price: '',
        description: '',
        status: ''
      }
    }
  },
  methods: {
    async saveMenu () {
      try {
        const api = Api()
        await api.post('/menu', this.menu)
        this.$router.push('/menus')
      } catch (err) {
        console.error(err)
        alert('บันทึกเมนูไม่สำเร็จ')
      }
    }
  }
}
</script>

<style scoped>
/* minimal styling */
div { margin: 8px 0 }
label { display:block; font-weight:600 }
input, textarea { width:100%; padding:6px; margin-top:4px }
button { margin-top:8px; margin-right:8px }
</style>