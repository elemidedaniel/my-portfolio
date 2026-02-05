export default function Socials() {
  return (
    <div className="flex flex-row gap-4 text-white">
      <a
        href="https://github.com/tegawavy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl"
      >
        <ion-icon name="logo-github"></ion-icon>
      </a>

      <a
        href="https://linkedin.com/in/daniel-elemide-47b37a302"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl"
      >
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>

      <a
        href="mailto:elemidedaniel4@gmail.com"
        className="text-4xl"
      >
        <ion-icon name="mail"></ion-icon>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/2349069206248"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl"
      >
        <ion-icon name="logo-whatsapp"></ion-icon>
      </a>
    </div>
  );
}
