import WhatsAppFloat from '@/components/layout/whatsapp-float'
import { CALL_LABEL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '@/lib/site'

export default function FloatActions() {
  return (
    <div className="float-actions">
      <a href={`tel:${CONTACT_PHONE_TEL}`} className="call-float" aria-label={CALL_LABEL} title={`${CALL_LABEL} ${CONTACT_PHONE}`}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.25 1.02l-2.2 2.22z" />
        </svg>
      </a>
      <WhatsAppFloat />
    </div>
  )
}
