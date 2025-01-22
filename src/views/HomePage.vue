<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Welcome</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 10%;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

#container p {
  font-size: 18px;
  line-height: 24px;
  color: #f1f1f1;
  margin: 1rem 0 0;
}

#container a {
  color: #ffd700;
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

#container a:hover {
  color: #ff6347;
}

/* เปลี่ยน Toolbar เป็นสีขาว */
ion-toolbar {
  --background: #ffffff; /* สีพื้นหลัง Toolbar */
  --color: #4a4a4a; /* สีข้อความภายใน Toolbar */
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงาเบาๆ ให้ Toolbar */
}

ion-title {
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

ion-content {
  --background: linear-gradient(135deg, #fdfbfb, #ebedee);
}
</style>
