export default function Socials() {
  return (
    <div className="flex flex-row gap-4 text-white">
      <a
        href="https://github.com/tegawavy"
        target="_blank"
        className="text-4xl"
      >
        <ion-icon name="logo-github"></ion-icon>
        {/* <span>GitHub</span> */}
      </a>

      <a
        href="https://linkedin.com/in/daniel-elemide-47b37a302"
        target="_blank"
        className="text-4xl"
      >
        <ion-icon name="logo-linkedin"></ion-icon>
        {/* <span>LinkedIn</span> */}
      </a>
      <a href="mailto:elemidedaniel4@gmail.com" className="text-4xl">
        <ion-icon name="mail"></ion-icon>
        {/* <span>Email Me</span> */}
      </a>
    </div>
  );
}
