import AppVersionInfo from "./AppVersionInfo";

import styles from "./AppDetails.module.css";

import { IonItemInAppExternalLink } from "#/features/shared/InAppExternalLink";

export default function AppDetails() {
  return (

    <>

      <div className={styles.container}>

        <img src="/logo.png" alt="" />

        <div>
            Sea Voyager
        </div>

      </div>
      
      <div>
            VERSION 1.0.0
      </div>

      <div>
        <p>

          Sea Voyager is a fork of Voyager.

        </p>

        <p>

          <IonItemInAppExternalLink
            detail
            href="https://github.com/aeharding/voyager"
            target="_blank"
            rel="noopener noreferrer"
          >
            The official Voyager app by Alexander Harding can be found here.
          </IonItemInAppExternalLink>

        </p>

        <p>
            Sea Voyager helps you to see Voyager with 
            enhanced large text support.
        </p>

        <p>
            The hope is that these accessibility enhancements can be
            merged into or otherwise supported by the official
            Voyager app.
        </p>

      </div>
 
    </>
  );
}
