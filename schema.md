export type EpicIssuer = {
    id: string;
    organization_name: string;
    organization_id?: string;
    fhir_base_url: string;
    auth_endpoint: string;
    token_endpoint: string;
    // Geographic/search data
    city?: string;
    state?: string;
    zip_code?: string;
    latitude?: number;
    longitude?: number;
    // Metadata
    is_active: boolean;
    supported_resources?: string[];
    last_verified_at?: Date;
    created_at: Date;
    updated_at: Date;
  };

  export const epicIssuerFields = [
    'id', 'organization_name', 'organization_id', 'fhir_base_url', 'auth_endpoint', 'token_endpoint',
    'city', 'state', 'zip_code', 'latitude', 'longitude', 'is_active', 'supported_resources',
    'last_verified_at', 'created_at', 'updated_at'
  ] as const;
  export type EpicIssuerField = (typeof epicIssuerFields)[number];

  export type UserEpicConnection = {
    id: string;
    user_id: string;
    issuer_id: string;
    integration_id: string;
    // Connection-specific data
    patient_id?: string;
    patient_mrn?: string;
    // Status
    is_active: boolean;
    last_sync_at?: Date;
    created_at: Date;
  };

  export const userEpicConnectionFields = [
    'id', 'user_id', 'issuer_id', 'integration_id', 'patient_id', 'patient_mrn',
    'is_active', 'last_sync_at', 'created_at'
  ] as const;
  export type UserEpicConnectionField = (typeof userEpicConnectionFields)[number];

