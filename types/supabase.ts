export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      lista: {
        Row: {
          adicionadoPor: string
          assistido: boolean
          created_at: string
          id: number
          nomeFilme: string
          pontosLara: number
          pontosVanessa: number
          tipo: string
        }
        Insert: {
          adicionadoPor?: string
          assistido?: boolean
          created_at?: string
          id?: number
          nomeFilme?: string
          pontosLara?: number
          pontosVanessa?: number
          tipo?: string
        }
        Update: {
          adicionadoPor?: string
          assistido?: boolean
          created_at?: string
          id?: number
          nomeFilme?: string
          pontosLara?: number
          pontosVanessa?: number
          tipo?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
